
      // auto generated
      //var self;

      // class constructor:
      function QAction() {
        

        // should be QAction_BaseJs.call(this, engine):
        //QAction.prototype = new QAction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAction.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QAction);
                
            //}
          }
          else {
            qWarning("QAction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QAction);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QAction);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAction_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QAction);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAction);
  }

  
  else {
    
        print("QAction(): wrong number / type of arguments");
      
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
              
    this["triggered(bool)"] = Object.getPrototypeOf(this).triggered;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
            }
          
        }

        

      }

      //QAction.prototype = new QAction_BaseJs(engine);
      //QAction.prototype = new QAction_Wrapper(engine);
      QAction.prototype = new Object();

      QAction.prototype.toString = function() {
          //return "QAction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAction [JS]";
        };
      QAction.getObjectType = function() {
        return RJSType_QAction.getIdStatic();
      };

      QAction.prototype.getObjectType = function() {
        return RJSType_QAction.getIdStatic();
      };

      QAction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAction.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MenuRole
QAction.NoRole = QAction_Wrapper.NoRole;
QAction.TextHeuristicRole = QAction_Wrapper.TextHeuristicRole;
QAction.ApplicationSpecificRole = QAction_Wrapper.ApplicationSpecificRole;
QAction.AboutQtRole = QAction_Wrapper.AboutQtRole;
QAction.AboutRole = QAction_Wrapper.AboutRole;
QAction.PreferencesRole = QAction_Wrapper.PreferencesRole;
QAction.QuitRole = QAction_Wrapper.QuitRole;

  // enum: Priority
QAction.LowPriority = QAction_Wrapper.LowPriority;
QAction.NormalPriority = QAction_Wrapper.NormalPriority;
QAction.HighPriority = QAction_Wrapper.HighPriority;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      