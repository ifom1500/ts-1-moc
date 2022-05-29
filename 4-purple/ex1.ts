// запрос в виде платежа
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

// Есь статусы success и failed
enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

// Запрос полностью копирует IPayment
interface IPaymentRequest extends IPayment {}

// Свойство data для статуса success и failed
interface IDataSuccess {
  sum: number;
  from: number;
  to: number;
  databaseId: number;
}
interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

// Ответы для статуса success и failed
interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}
interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}