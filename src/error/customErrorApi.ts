export default class CustomErrorApi {
  statusCode: number;
  body: any;
  constructor(statusCode: number, body: any) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
