class ApiResponce {
    constructor(status, data = [], message = "success") {
        this.status = status;
        this.Length = data?.length;
        this.data = data;
        this.message = message;
        this.success = status < 400;
    }
}

export { ApiResponce };
