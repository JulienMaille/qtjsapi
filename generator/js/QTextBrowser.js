
      // auto generated
      //var self;

      // class constructor:
      function QTextBrowser() {
        

        // should be QTextBrowser_BaseJs.call(this, engine):
        //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextBrowser.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTextBrowser);
                
            //}
          }
          else {
            qWarning("QTextBrowser.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextBrowser_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextBrowser);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextBrowser);
  }

  
  else {
    
        print("QTextBrowser(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["undoAvailable(bool)"] = Object.getPrototypeOf(this).undoAvailable;
  
    this["redoAvailable(bool)"] = Object.getPrototypeOf(this).redoAvailable;
  
    this["currentCharFormatChanged(QTextCharFormat)"] = Object.getPrototypeOf(this).currentCharFormatChanged;
  
    this["copyAvailable(bool)"] = Object.getPrototypeOf(this).copyAvailable;
  
    this["backwardAvailable(bool)"] = Object.getPrototypeOf(this).backwardAvailable;
  
    this["forwardAvailable(bool)"] = Object.getPrototypeOf(this).forwardAvailable;
  
    this["sourceChanged(QUrl)"] = Object.getPrototypeOf(this).sourceChanged;
  
    this["highlighted(QUrl)"] = Object.getPrototypeOf(this).highlighted;
  
    this["anchorClicked(QUrl)"] = Object.getPrototypeOf(this).anchorClicked;
  
            }
          
        }

        

      }

      //QTextBrowser.prototype = new QTextBrowser_BaseJs(engine);
      //QTextBrowser.prototype = new QTextBrowser_Wrapper(engine);
      QTextBrowser.prototype = new Object();

      QTextBrowser.prototype.toString = function() {
          //return "QTextBrowser [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextBrowser [JS]";
        };
      QTextBrowser.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.getObjectType = function() {
        return RJSType_QTextBrowser.getIdStatic();
      };

      QTextBrowser.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextBrowser.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTextBrowser.NoFrame = QTextBrowser_Wrapper.NoFrame;
QTextBrowser.Box = QTextBrowser_Wrapper.Box;
QTextBrowser.Panel = QTextBrowser_Wrapper.Panel;
QTextBrowser.WinPanel = QTextBrowser_Wrapper.WinPanel;
QTextBrowser.HLine = QTextBrowser_Wrapper.HLine;
QTextBrowser.VLine = QTextBrowser_Wrapper.VLine;
QTextBrowser.StyledPanel = QTextBrowser_Wrapper.StyledPanel;

  // enum: Shadow
QTextBrowser.Plain = QTextBrowser_Wrapper.Plain;
QTextBrowser.Raised = QTextBrowser_Wrapper.Raised;
QTextBrowser.Sunken = QTextBrowser_Wrapper.Sunken;

  // enum: StyleMask
QTextBrowser.Shadow_Mask = QTextBrowser_Wrapper.Shadow_Mask;
QTextBrowser.Shape_Mask = QTextBrowser_Wrapper.Shape_Mask;

  // enum: LineWrapMode
QTextBrowser.NoWrap = QTextBrowser_Wrapper.NoWrap;
QTextBrowser.WidgetWidth = QTextBrowser_Wrapper.WidgetWidth;
QTextBrowser.FixedPixelWidth = QTextBrowser_Wrapper.FixedPixelWidth;
QTextBrowser.FixedColumnWidth = QTextBrowser_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
QTextBrowser.AutoNone = QTextBrowser_Wrapper.AutoNone;
QTextBrowser.AutoBulletList = QTextBrowser_Wrapper.AutoBulletList;
QTextBrowser.AutoAll = QTextBrowser_Wrapper.AutoAll;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextBrowser.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextBrowser.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      