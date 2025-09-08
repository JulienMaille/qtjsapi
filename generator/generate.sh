#!/bin/bash

echo "Generating script bindings..."

DIR=`dirname $0`
echo $DIR

if [[ `pwd` == *qcadjsapi* ]]
then
    MODULE="qcad"
fi

if [[ `pwd` == *qcadprojsapi* ]]
then
    MODULE="qcadpro"
fi

if [[ `pwd` == *qcadnestjsapi* ]]
then
    MODULE="qcadnest"
fi

if [[ `pwd` == *qcadtutorialjsapi* ]]
then
    MODULE="qcadtutorial"
fi

if [[ `pwd` == *qcadgles3djsapi* ]]
then
    MODULE="qcadgles3d"
fi

if [[ `pwd` == *qcadquickjsapi* ]]
then
    MODULE="qcadquick"
fi

if [[ `pwd` == *qcadtexjsapi* ]]
then
    MODULE="qcadtex"
fi

if [[ `pwd` == *qcadrhijsapi* ]]
then
    MODULE="qcadrhi"
fi

echo "Generating module $MODULE"

echo "Generating helpers..."
sh $DIR/xml2type.sh $MODULE

echo "xml2sorted..."
sh $DIR/xml2sorted.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2all..."
sh $DIR/xml2all.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2helper (relies on xmlall)..."
sh $DIR/xml2helper.sh $MODULE

echo "xml2merged..."
sh $DIR/xml2merged.sh $MODULE
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2unique..."
sh $DIR/xml2unique.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2addcount..."
sh $DIR/xml2addcount.sh
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2cpp..."
sh $DIR/xml2cpp.sh $MODULE
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2cppbase..."
sh $DIR/xml2cppbase.sh $MODULE
if [ $? -ne 0 ]; then exit $?; fi

echo "xml2js..."
sh $DIR/xml2js.sh $MODULE
if [ $? -ne 0 ]; then exit $?; fi

find cpp -type f -size 0 | xargs rm -f

wait

if [ ! -d templates ]
then
    exit
fi

echo "// Automatically generated, do not edit" > new_header_cpp.h
cat templates/header_cpp_header.h >> new_header_cpp.h
for f in cpp/*.h
do
    echo "#include \"generator/$f\"" >> new_header_cpp.h
done
cat templates/header_cpp_footer.h >> new_header_cpp.h

OUTPUT="header_cpp.h"
if [ ! -z $MODULE ]
then
    OUTPUT="header_${MODULE}_cpp.h"
fi

diff new_header_cpp.h $OUTPUT
if [ $? -ne 0 ]
then
    mv new_header_cpp.h $OUTPUT
else
    rm new_header_cpp.h
fi

echo "generate_CMakeInclude..."
sh $DIR/generate_CMakeInclude.sh $MODULE

wait
cd ..
echo "update_qrc..."
sh update_qrc.sh $MODULE

echo "done"
