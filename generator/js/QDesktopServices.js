
      // auto generated
      //var self;

      // class constructor:
      function QDesktopServices() {
        

        // should be QDesktopServices_BaseJs.call(this, engine):
        //QDesktopServices.prototype = new QDesktopServices_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDesktopServices.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QDesktopServices.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDesktopServices_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDesktopServices);
  }

  
  else {
    
        print("QDesktopServices(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //QDesktopServices.prototype = new QDesktopServices_BaseJs(engine);
      //QDesktopServices.prototype = new QDesktopServices_Wrapper(engine);
      QDesktopServices.prototype = new Object();

      QDesktopServices.prototype.toString = function() {
          //return "QDesktopServices [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDesktopServices [JS]";
        };
      QDesktopServices.getObjectType = function() {
        return RJSType_QDesktopServices.getIdStatic();
      };

      QDesktopServices.prototype.getObjectType = function() {
        return RJSType_QDesktopServices.getIdStatic();
      };

      QDesktopServices.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDesktopServices.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QDesktopServices.prototype.openUrl = function(...args) 
          
        {
          //print("JS: QDesktopServices.prototype.openUrl");
          return this.__PROXY__.openUrl(...args);
        };
    
        // function 
        QDesktopServices.prototype.setUrlHandler = function(...args) 
          
        {
          //print("JS: QDesktopServices.prototype.setUrlHandler");
          return this.__PROXY__.setUrlHandler(...args);
        };
    
        // function 
        QDesktopServices.prototype.unsetUrlHandler = function(...args) 
          
        {
          //print("JS: QDesktopServices.prototype.unsetUrlHandler");
          return this.__PROXY__.unsetUrlHandler(...args);
        };
    

      // static functions:
      

        // static function 
        QDesktopServices.openUrl = function() 
          
        {
          //print("JS: QDesktopServices.openUrl");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDesktopServices_WrapperSingletonInstance.openUrl(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDesktopServices);
  }

  
  else {
    
        print("QDesktopServices.openUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDesktopServices.setUrlHandler = function() 
          
        {
          //print("JS: QDesktopServices.setUrlHandler");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QDesktopServices_WrapperSingletonInstance.setUrlHandler(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDesktopServices);
  }

  
  else {
    
        print("QDesktopServices.setUrlHandler(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDesktopServices.unsetUrlHandler = function() 
          
        {
          //print("JS: QDesktopServices.unsetUrlHandler");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDesktopServices_WrapperSingletonInstance.unsetUrlHandler(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDesktopServices);
  }

  
  else {
    
        print("QDesktopServices.unsetUrlHandler(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDesktopServices.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDesktopServices.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDesktopServices.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      