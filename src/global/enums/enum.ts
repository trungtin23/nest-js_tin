export enum HttpMessage {
  SUCCESS_MESSAGE = 'Thành công. ',
  ERROR_MESSAGE = 'Thất bại. ',
  UPDATE_MESSAGE = 'Cập nhật thành công. ',
  CREATED_MESSAGE = 'Thêm mới dữ liệu thành công. ',
  DELETE_MESSAGE = 'Xóa dữ liêu thành công. ',
  NOTFOUND_MESSAGE = 'Bản ghi không tồn tại. ',
}

export enum HttpStatus {
  SUCESS = 200,
  ERROR = 500,
  NOT_FOUND = 400,
  CREATED = 201,
  BAD_REQUEST = 404,
}
