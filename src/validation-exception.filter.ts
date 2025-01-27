import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    // Если это ошибка валидации
    if (errorResponse && Array.isArray(errorResponse['message'])) {
      const messages = this.formatValidationErrors(errorResponse['message']);
      response.status(status).json({
        statusCode: status,
        error: 'Bad Request',
        message: messages,
      });
    } else {
      response.status(status).json(errorResponse);
    }
  }

  private formatValidationErrors(errors: string[]): string[] {
    // Можно здесь улучшить вывод ошибок в зависимости от структуры ошибок
    return errors.map((error) => {
      return `Ошибка: ${error}`;
    });
  }
}
