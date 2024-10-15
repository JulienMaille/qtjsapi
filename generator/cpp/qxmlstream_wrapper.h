
  // Auto generated
  
    #ifndef QXMLSTREAM_H_WRAPPER
    #define QXMLSTREAM_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QXmlStreamAttributes>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlStreamAttribute>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlStreamAttribute
    class QTJSAPI_EXPORT QXmlStreamAttribute_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlStreamAttribute_Wrapper(const QXmlStreamAttribute_Wrapper&);

    public:
      // initialization of QXmlStreamAttribute:
      static void init(RJSApi& handler);

      
        static QXmlStreamAttribute* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlStreamAttribute:
          for (int i=0; i<basecasters_QXmlStreamAttribute.length(); i++) {
            RJSBasecaster_QXmlStreamAttribute* basecaster = basecasters_QXmlStreamAttribute[i];
            QXmlStreamAttribute* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlStreamAttribute:
          if (t==RJSType_QXmlStreamAttribute::getIdStatic()) {
            return (QXmlStreamAttribute*)vp;
          }

          qWarning() << "QXmlStreamAttribute_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlStreamAttribute* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlStreamAttribute*: wrapper wraps NULL";
          }

          QXmlStreamAttribute* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlStreamAttribute*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlStreamAttribute_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlStreamAttribute_Wrapper(RJSApi& h, QXmlStreamAttribute* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlStreamAttribute_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlStreamAttribute
    // Function: isDefault
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDefault
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlStreamAttribute::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlStreamAttribute* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlStreamAttribute* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlStreamAttribute* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlStreamAttribute*> basecasters_QXmlStreamAttribute;

      public:
        static void registerBasecaster_QXmlStreamAttribute(RJSBasecaster_QXmlStreamAttribute* bc) {
          basecasters_QXmlStreamAttribute.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlStreamAttribute_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlStreamAttribute_Wrapper, "org.qcad.QXmlStreamAttribute_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlStreamAttributes>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlStreamAttributes
    class QTJSAPI_EXPORT QXmlStreamAttributes_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlStreamAttributes_Wrapper(const QXmlStreamAttributes_Wrapper&);

    public:
      // initialization of QXmlStreamAttributes:
      static void init(RJSApi& handler);

      
        static QXmlStreamAttributes* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlStreamAttributes:
          for (int i=0; i<basecasters_QXmlStreamAttributes.length(); i++) {
            RJSBasecaster_QXmlStreamAttributes* basecaster = basecasters_QXmlStreamAttributes[i];
            QXmlStreamAttributes* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlStreamAttributes:
          if (t==RJSType_QXmlStreamAttributes::getIdStatic()) {
            return (QXmlStreamAttributes*)vp;
          }

          qWarning() << "QXmlStreamAttributes_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlStreamAttributes* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlStreamAttributes*: wrapper wraps NULL";
          }

          QXmlStreamAttributes* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlStreamAttributes*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlStreamAttributes_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlStreamAttributes_Wrapper(RJSApi& h, QXmlStreamAttributes* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlStreamAttributes_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlStreamAttributes
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlStreamAttributes_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlStreamAttributes
    // Function: append
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  append
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamAttributes
    // Function: hasAttribute
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlStreamAttributes::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlStreamAttributes* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlStreamAttributes* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlStreamAttributes* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlStreamAttributes*> basecasters_QXmlStreamAttributes;

      public:
        static void registerBasecaster_QXmlStreamAttributes(RJSBasecaster_QXmlStreamAttributes* bc) {
          basecasters_QXmlStreamAttributes.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlStreamAttributes_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlStreamAttributes_Wrapper, "org.qcad.QXmlStreamAttributes_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlStreamReader>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlStreamReader
    class QTJSAPI_EXPORT QXmlStreamReader_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlStreamReader_Wrapper(const QXmlStreamReader_Wrapper&);

    public:
      // initialization of QXmlStreamReader:
      static void init(RJSApi& handler);

      
        static QXmlStreamReader* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlStreamReader:
          for (int i=0; i<basecasters_QXmlStreamReader.length(); i++) {
            RJSBasecaster_QXmlStreamReader* basecaster = basecasters_QXmlStreamReader[i];
            QXmlStreamReader* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlStreamReader:
          if (t==RJSType_QXmlStreamReader::getIdStatic()) {
            return (QXmlStreamReader*)vp;
          }

          qWarning() << "QXmlStreamReader_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlStreamReader* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlStreamReader*: wrapper wraps NULL";
          }

          QXmlStreamReader* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlStreamReader*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum TokenType {
    NoToken = QXmlStreamReader::NoToken,
Invalid = QXmlStreamReader::Invalid,
StartDocument = QXmlStreamReader::StartDocument,
EndDocument = QXmlStreamReader::EndDocument,
StartElement = QXmlStreamReader::StartElement,
EndElement = QXmlStreamReader::EndElement,
Characters = QXmlStreamReader::Characters,
Comment = QXmlStreamReader::Comment,
DTD = QXmlStreamReader::DTD,
EntityReference = QXmlStreamReader::EntityReference,
ProcessingInstruction = QXmlStreamReader::ProcessingInstruction,

  };
  Q_ENUM(TokenType)

  enum ReadElementTextBehaviour {
    ErrorOnUnexpectedElement = QXmlStreamReader::ErrorOnUnexpectedElement,
IncludeChildElements = QXmlStreamReader::IncludeChildElements,
SkipChildElements = QXmlStreamReader::SkipChildElements,

  };
  Q_ENUM(ReadElementTextBehaviour)

  enum Error {
    NoError = QXmlStreamReader::NoError,
UnexpectedElementError = QXmlStreamReader::UnexpectedElementError,
CustomError = QXmlStreamReader::CustomError,
NotWellFormedError = QXmlStreamReader::NotWellFormedError,
PrematureEndOfDocumentError = QXmlStreamReader::PrematureEndOfDocumentError,

  };
  Q_ENUM(Error)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlStreamReader_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlStreamReader_Wrapper(RJSApi& h, QXmlStreamReader* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlStreamReader_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlStreamReader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlStreamReader_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlStreamReader
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDevice
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  device
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: addData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: readNext
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readNext
              (

                
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: readNextStartElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readNextStartElement
              (

                
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: skipCurrentElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  skipCurrentElement
              (

                
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: tokenType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tokenType
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: tokenString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tokenString
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: setNamespaceProcessing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNamespaceProcessing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: namespaceProcessing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceProcessing
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isStartDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isStartDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isEndDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isStartElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isStartElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isEndElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isCharacters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacters
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isWhitespace
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWhitespace
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATA
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isComment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDTD
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isEntityReference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: isStandaloneDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isStandaloneDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: characterOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  characterOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: attributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: readElementText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readElementText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: entityExpansionLimit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  entityExpansionLimit
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: setEntityExpansionLimit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEntityExpansionLimit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: raiseError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  raiseError
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamReader
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamReader
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasError
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlStreamReader::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlStreamReader* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlStreamReader* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlStreamReader* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlStreamReader*> basecasters_QXmlStreamReader;

      public:
        static void registerBasecaster_QXmlStreamReader(RJSBasecaster_QXmlStreamReader* bc) {
          basecasters_QXmlStreamReader.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlStreamReader_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlStreamReader_Wrapper, "org.qcad.QXmlStreamReader_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlStreamWriter>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlStreamWriter
    class QTJSAPI_EXPORT QXmlStreamWriter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlStreamWriter_Wrapper(const QXmlStreamWriter_Wrapper&);

    public:
      // initialization of QXmlStreamWriter:
      static void init(RJSApi& handler);

      
        static QXmlStreamWriter* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlStreamWriter:
          for (int i=0; i<basecasters_QXmlStreamWriter.length(); i++) {
            RJSBasecaster_QXmlStreamWriter* basecaster = basecasters_QXmlStreamWriter[i];
            QXmlStreamWriter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlStreamWriter:
          if (t==RJSType_QXmlStreamWriter::getIdStatic()) {
            return (QXmlStreamWriter*)vp;
          }

          qWarning() << "QXmlStreamWriter_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlStreamWriter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlStreamWriter*: wrapper wraps NULL";
          }

          QXmlStreamWriter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlStreamWriter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlStreamWriter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlStreamWriter_Wrapper(RJSApi& h, QXmlStreamWriter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlStreamWriter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlStreamWriter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlStreamWriter_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_XMLSTREAMREADER

#endif


    // non-static functions:
    
    // Class: QXmlStreamWriter
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDevice
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  device
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: setAutoFormatting
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoFormatting
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: autoFormatting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoFormatting
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: setAutoFormattingIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoFormattingIndent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: autoFormattingIndent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoFormattingIndent
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeAttribute
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeAttributes
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeAttributes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeCDATA
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeCDATA
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeCharacters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeCharacters
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeComment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeComment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeDTD
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeDTD
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeEmptyElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeEmptyElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeTextElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeTextElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeEndDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeEndDocument
              (

                
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeEndElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeEndElement
              (

                
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeEntityReference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeEntityReference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeNamespace
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeNamespace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeDefaultNamespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeDefaultNamespace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeProcessingInstruction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeStartDocument
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeStartDocument
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlStreamWriter
    // Function: writeStartElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeStartElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_XMLSTREAMREADER

    // Class: QXmlStreamWriter
    // Function: writeCurrentToken
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeCurrentToken
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QXmlStreamWriter
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasError
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlStreamWriter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlStreamWriter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlStreamWriter* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlStreamWriter* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlStreamWriter*> basecasters_QXmlStreamWriter;

      public:
        static void registerBasecaster_QXmlStreamWriter(RJSBasecaster_QXmlStreamWriter* bc) {
          basecasters_QXmlStreamWriter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlStreamWriter_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlStreamWriter_Wrapper, "org.qcad.QXmlStreamWriter_Wrapper")

  
  #endif
  
