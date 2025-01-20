
      // auto generated
      //var self;

      // class constructor:
      function QTextEdit() {
        

        // should be QTextEdit_BaseJs.call(this, engine):
        //QTextEdit.prototype = new QTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextEdit.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTextEdit);
                
            //}
          }
          else {
            qWarning("QTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextEdit);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTextEdit);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextEdit);
  }

  
  else {
    
        print("QTextEdit(): wrong number / type of arguments");
      
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
  
            }
          
        }

        

      }

      //QTextEdit.prototype = new QTextEdit_BaseJs(engine);
      //QTextEdit.prototype = new QTextEdit_Wrapper(engine);
      QTextEdit.prototype = new Object();

      QTextEdit.prototype.toString = function() {
          //return "QTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextEdit [JS]";
        };
      QTextEdit.getObjectType = function() {
        return RJSType_QTextEdit.getIdStatic();
      };

      QTextEdit.prototype.getObjectType = function() {
        return RJSType_QTextEdit.getIdStatic();
      };

      QTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextEdit.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTextEdit.NoFrame = QTextEdit_Wrapper.NoFrame;
QTextEdit.Box = QTextEdit_Wrapper.Box;
QTextEdit.Panel = QTextEdit_Wrapper.Panel;
QTextEdit.WinPanel = QTextEdit_Wrapper.WinPanel;
QTextEdit.HLine = QTextEdit_Wrapper.HLine;
QTextEdit.VLine = QTextEdit_Wrapper.VLine;
QTextEdit.StyledPanel = QTextEdit_Wrapper.StyledPanel;

  // enum: Shadow
QTextEdit.Plain = QTextEdit_Wrapper.Plain;
QTextEdit.Raised = QTextEdit_Wrapper.Raised;
QTextEdit.Sunken = QTextEdit_Wrapper.Sunken;

  // enum: StyleMask
QTextEdit.Shadow_Mask = QTextEdit_Wrapper.Shadow_Mask;
QTextEdit.Shape_Mask = QTextEdit_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QTextEdit.AdjustIgnored = QTextEdit_Wrapper.AdjustIgnored;
QTextEdit.AdjustToContentsOnFirstShow = QTextEdit_Wrapper.AdjustToContentsOnFirstShow;
QTextEdit.AdjustToContents = QTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
QTextEdit.NoWrap = QTextEdit_Wrapper.NoWrap;
QTextEdit.WidgetWidth = QTextEdit_Wrapper.WidgetWidth;
QTextEdit.FixedPixelWidth = QTextEdit_Wrapper.FixedPixelWidth;
QTextEdit.FixedColumnWidth = QTextEdit_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
QTextEdit.AutoNone = QTextEdit_Wrapper.AutoNone;
QTextEdit.AutoBulletList = QTextEdit_Wrapper.AutoBulletList;
QTextEdit.AutoAll = QTextEdit_Wrapper.AutoAll;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      