import { IApiResponse } from "@core/interfaces";

export class ApiResponse implements IApiResponse {
  data: any | null = null;
  error: string | null = null;
  message: string | null = null;
  messageType: string | null = null;
}
