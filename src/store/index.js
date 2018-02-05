import TimeLineStore from './TimeLineStore';
import ModuleInfoStore from './ModuleInfoStore';

export const timeLineStore = (window.timesLineStore = new TimeLineStore());
export const moduleInfoStore = (window.moduleInfoStore = new ModuleInfoStore());
