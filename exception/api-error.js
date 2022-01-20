module.exports = class ApiError extends Error {
	status;
	errors;

	constructor(status, message, errors = []) {
		super(message)
		this.status = status;
		this.errors = errors;
	}

	static UnathorizedError() {
		return new ApiError(401, 'User with this userid not exist!')
	}

	static BedRequest(message, errors = []) {
		return new ApiError(400, message, errors)
	}
}