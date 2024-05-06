class AlarmClock {
  constructor()  {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if(time === null || callback === undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
    }

    if(this.alarmCollection.some((alarm) => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true,})
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(element => element.time !== time);
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    return String(currentDate.getHours()).padStart(2, "0") + ":" + String(currentDate.getMinutes()).padStart(2, "0");
  }
   
  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        const currentTime = this.getCurrentFormattedTime();
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();  
        }
      }) 
    },1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach( alarm => alarm.canCall = true)
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}