import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateAdvertismentDto {
  /* Название. */
  @IsString({ message: 'name должно быть строкой' })
  readonly name: string;

  /* Описание. */
  @IsString({ message: 'description должно быть строкой' })
  @IsOptional()
  readonly description?: string;

  /* Цена. */
  @IsNumber({}, { message: 'price должно быть числом' })
  readonly price: number;

  /* Дата и время создания. */
  @IsString({ message: 'createdAt должна быть строкой' })
  @IsOptional()
  readonly createdAt?: string;

  /* Количество просмотров. */
  @IsNumber({}, { message: 'views должно быть числом' })
  readonly views: number;

  /* Количество лайков. */
  @IsNumber({}, { message: 'likes должно быть числом' })
  readonly likes: number;

  /* Ссылка на изображение. */
  @IsString({ message: 'imageUrl должна быть строкой' })
  @IsOptional()
  readonly imageUrl?: string;
}
