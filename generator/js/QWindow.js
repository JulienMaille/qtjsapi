
      // auto generated
      //var self;

      // class constructor:
      function QWindow() {
        

        // should be QWindow_BaseJs.call(this, engine):
        //QWindow.prototype = new QWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWindow.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QWindow);
                
            //}
          }
          else {
            qWarning("QWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QWindow_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QWindow);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QWindow);
  }

  
  else {
    
        print("QWindow(): wrong number / type of arguments");
      
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
              
    this["screenChanged(QScreen*)"] = Object.getPrototypeOf(this).screenChanged;
  
    this["modalityChanged(Qt::WindowModality)"] = Object.getPrototypeOf(this).modalityChanged;
  
    this["windowStateChanged(Qt::WindowState)"] = Object.getPrototypeOf(this).windowStateChanged;
  
    this["windowTitleChanged(QString)"] = Object.getPrototypeOf(this).windowTitleChanged;
  
    this["xChanged(int)"] = Object.getPrototypeOf(this).xChanged;
  
    this["yChanged(int)"] = Object.getPrototypeOf(this).yChanged;
  
    this["widthChanged(int)"] = Object.getPrototypeOf(this).widthChanged;
  
    this["heightChanged(int)"] = Object.getPrototypeOf(this).heightChanged;
  
    this["minimumWidthChanged(int)"] = Object.getPrototypeOf(this).minimumWidthChanged;
  
    this["minimumHeightChanged(int)"] = Object.getPrototypeOf(this).minimumHeightChanged;
  
    this["maximumWidthChanged(int)"] = Object.getPrototypeOf(this).maximumWidthChanged;
  
    this["maximumHeightChanged(int)"] = Object.getPrototypeOf(this).maximumHeightChanged;
  
    this["visibleChanged(bool)"] = Object.getPrototypeOf(this).visibleChanged;
  
    this["visibilityChanged(QWindow::Visibility)"] = Object.getPrototypeOf(this).visibilityChanged;
  
    this["contentOrientationChanged(Qt::ScreenOrientation)"] = Object.getPrototypeOf(this).contentOrientationChanged;
  
    this["focusObjectChanged(QObject*)"] = Object.getPrototypeOf(this).focusObjectChanged;
  
    this["opacityChanged(qreal)"] = Object.getPrototypeOf(this).opacityChanged;
  
    this["transientParentChanged(QWindow*)"] = Object.getPrototypeOf(this).transientParentChanged;
  
            }
          
        }

        

      }

      //QWindow.prototype = new QWindow_BaseJs(engine);
      //QWindow.prototype = new QWindow_Wrapper(engine);
      QWindow.prototype = new Object();

      QWindow.prototype.toString = function() {
          //return "QWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWindow [JS]";
        };
      QWindow.getObjectType = function() {
        return RJSType_QWindow.getIdStatic();
      };

      QWindow.prototype.getObjectType = function() {
        return RJSType_QWindow.getIdStatic();
      };

      QWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWindow.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSurface.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Visibility
QWindow.Hidden = QWindow_Wrapper.Hidden;
QWindow.AutomaticVisibility = QWindow_Wrapper.AutomaticVisibility;
QWindow.Windowed = QWindow_Wrapper.Windowed;
QWindow.Minimized = QWindow_Wrapper.Minimized;
QWindow.Maximized = QWindow_Wrapper.Maximized;
QWindow.FullScreen = QWindow_Wrapper.FullScreen;

  // enum: AncestorMode
QWindow.ExcludeTransients = QWindow_Wrapper.ExcludeTransients;
QWindow.IncludeTransients = QWindow_Wrapper.IncludeTransients;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      