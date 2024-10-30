import axios from "axios";
export class SkpyNotify {
  constructor(public readonly host: string) {}
  
  sendBot(message: string) {
    const url = this.host + "/api/v1/skpy/send-notify";
    axios.post(url, {
      message: message,
    });
  }
}
