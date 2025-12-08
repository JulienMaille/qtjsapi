QCoreApplication.args = function() {
    if (arguments.length==0) {
        return QCoreApplication_WrapperSingletonInstance.arguments();
    }
    else {
        print("QCoreApplication.args(): wrong number / type of arguments");
    }
};

/**
 * Compatibility.
 * Set QDir.separator as property.
 * Original function QDir::separator() available as QDir.sep();
 */
QDir.separator = QDir.sep();

/**
 * Qt 4, 5, 6 Compatibility.
 */
Qt.MidButton = Qt.MiddleButton;
QRegExpValidator = QRegularExpressionValidator;

QDomNode.prototype.save = function(indent) {
    return tools.saveQNode(this, indent);
};

QDomElement.prototype.save = function(indent) {
    return tools.jsQNodeSave(this, indent);
};

QByteArray.prototype.appendByte = function(c) {
    return this.append(c);
};

function inspect(obj, indent) {
    if (indent==undefined) {
        indent = 0;
    }

    qDebug(" ".repeat(indent) + "obj: " + obj);
    var p = Object.getPrototypeOf(obj);
    if (p==undefined) {
        return;
    }

    inspect(p, indent + 2);
}
