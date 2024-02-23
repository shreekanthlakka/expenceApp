class ApiErrors extends Error {
    constructor(status, message = "Something went wrong", errors = []) {
        super(message);
        this.status = status;
        this.data = [];
        this.message = message;
        this.success = false;
        this.errors = errors;
    }
}

export { ApiErrors };
