import { Controller } from "egg";

type ErorMessageType = {
  message: string;
  code?: number;
};
type SuccessMessageType = {
  code?: number;
  message?: string;
  data?: any;
};

export default class baseController extends Controller {
  ERROR_TYPE_FIELD_ERROR = 10001; // 字段异常
  // 异常处理
  toStringError(errors) {
    if (errors) {
      let errorStr = "";
      errors.forEach((error: ValidateError) => {
        errorStr += `${error?.field}=${error?.message},`;
      });
      if (errorStr) {
        errorStr = errorStr.substring(0, errorStr.lastIndexOf(","));
      }
      return errorStr;
    }
    return "";
  }

  // 数据成功返回
  resultSuccessMessage({
    code = 200,
    message = "",
    data = null,
  }: SuccessMessageType) {
    if (message && data) {
      return { code, message, data };
    }
    if (!data) {
      return { code, message };
    }
    return { code, data };
  }
  // 数据异常返回
  resultErrorMessage({
    message,
    code = this.ERROR_TYPE_FIELD_ERROR,
  }: ErorMessageType) {
    return { code, message };
  }
}
