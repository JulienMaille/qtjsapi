
      // auto generated
      //var self;

      // class constructor:
      function QLabel() {
        

        // should be QLabel_BaseJs.call(this, engine):
        //QLabel.prototype = new QLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLabel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QLabel);
                
            //}
          }
          else {
            qWarning("QLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QLabel);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QLabel);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel(): wrong number / type of arguments");
      
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
  
    this["linkActivated(QString)"] = Object.getPrototypeOf(this).linkActivated;
  
    this["linkHovered(QString)"] = Object.getPrototypeOf(this).linkHovered;
  
            }
          
        }

        

      }

      //QLabel.prototype = new QLabel_BaseJs(engine);
      //QLabel.prototype = new QLabel_Wrapper(engine);
      QLabel.prototype = new Object();

      QLabel.prototype.toString = function() {
          //return "QLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLabel [JS]";
        };
      QLabel.getObjectType = function() {
        return RJSType_QLabel.getIdStatic();
      };

      QLabel.prototype.getObjectType = function() {
        return RJSType_QLabel.getIdStatic();
      };

      QLabel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLabel.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QLabel.NoFrame = QLabel_Wrapper.NoFrame;
QLabel.Box = QLabel_Wrapper.Box;
QLabel.Panel = QLabel_Wrapper.Panel;
QLabel.WinPanel = QLabel_Wrapper.WinPanel;
QLabel.HLine = QLabel_Wrapper.HLine;
QLabel.VLine = QLabel_Wrapper.VLine;
QLabel.StyledPanel = QLabel_Wrapper.StyledPanel;

  // enum: Shadow
QLabel.Plain = QLabel_Wrapper.Plain;
QLabel.Raised = QLabel_Wrapper.Raised;
QLabel.Sunken = QLabel_Wrapper.Sunken;

  // enum: StyleMask
QLabel.Shadow_Mask = QLabel_Wrapper.Shadow_Mask;
QLabel.Shape_Mask = QLabel_Wrapper.Shape_Mask;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      