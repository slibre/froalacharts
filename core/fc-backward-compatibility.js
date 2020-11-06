import _FroalaCharts from"./";import{raiseError}from"@froalacharts/core/src/event-api";import DataStore from"../datastore";import{between,equals,less,lessEquals,greater,greaterEquals,filter,select,groupBy,pipe,sort,pivot}from"../datastore/operators";import{aggregatorStore}from"../datastore/aggregators/index.js";import{before,after,parseDate,formatDate,duration,DatetimeUnits,Weekdays}from"../utils";_FroalaCharts.DataStore=DataStore;_FroalaCharts.DataStore.Operators={between:between,equals:equals,less:less,lessEquals:lessEquals,greater:greater,greaterEquals:greaterEquals,filter:filter,select:select,groupBy:groupBy,pipe:pipe,sort:sort,pivot:pivot};_FroalaCharts.Utils={duration:duration,before:before,after:after,parseDate:parseDate,formatDate:formatDate,DatetimeUnits:DatetimeUnits,Weekdays:Weekdays};_FroalaCharts.DataStore.Aggregators={aggregatorStore:aggregatorStore};const interpreters=["type","id","width","height","debugMode","registerWithJS","backgroundColor","scaleMode","lang","detectFlashVersion","autoInstallRedirect"],parseCommands=(obj,args)=>{var i,l;for(i=0,l=interpreters.length;i<l;i++){if(typeof args[i]==="object"){Object.assign(obj,args[i])}else{obj[interpreters[i]]=args[i]}}return obj};function FroalaCharts(optionsArg){let options=optionsArg;if(this instanceof FroalaCharts){if(!(arguments.length===1&&typeof options==="object")){options=parseCommands({},arguments)}return new(Function.prototype.bind.apply(_FroalaCharts,[null].concat(options)))}if(arguments.length===1&&options instanceof Array&&options[0]==="private"){return _FroalaCharts.register("module",options)}if(arguments.length===1&&typeof options==="string"){return _FroalaCharts.getChartFromId(options)}raiseError(FroalaCharts,"25081840","run","",new SyntaxError('Use the "new" keyword while creating a new FroalaCharts object'))}Object.getOwnPropertyNames(_FroalaCharts).filter(prop=>Object.getOwnPropertyDescriptor(_FroalaCharts,prop).writable===true).forEach(prop=>{FroalaCharts[prop]=_FroalaCharts[prop]});export default FroalaCharts;