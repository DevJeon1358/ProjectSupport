class Requests {
  public wrap(body: Object):void {
    Object.keys(body).forEach((e) => {
      if (!this[e]) {
        throw new Error(`Could not find key: ${e}`);
      }

      this[e] = body[e];
    });
  }
}

export default Requests;
