
      // auto generated
      //var self;

      // class constructor:
      function QSplashScreen() {
        

        // should be QSplashScreen_BaseJs.call(this, engine):
        //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSplashScreen.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSplashScreen);
                
            //}
          }
          else {
            qWarning("QSplashScreen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSplashScreen);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSplashScreen);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen(): wrong number / type of arguments");
      
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
  
    this["messageChanged(QString)"] = Object.getPrototypeOf(this).messageChanged;
  
            }
          
        }

        

      }

      //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);
      //QSplashScreen.prototype = new QSplashScreen_Wrapper(engine);
      QSplashScreen.prototype = new Object();

      QSplashScreen.prototype.toString = function() {
          //return "QSplashScreen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplashScreen [JS]";
        };
      QSplashScreen.getObjectType = function() {
        return RJSType_QSplashScreen.getIdStatic();
      };

      QSplashScreen.prototype.getObjectType = function() {
        return RJSType_QSplashScreen.getIdStatic();
      };

      QSplashScreen.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSplashScreen.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplashScreen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplashScreen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      