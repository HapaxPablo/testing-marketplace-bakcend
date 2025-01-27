import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateAdvertismentDto {
  /* Название. */
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Название не может быть пустым' })
  readonly name: string;

  /* Описание. */
  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  readonly description?: string;

  /* Цена. */
  @IsNumber({}, { message: 'Цена должна быть числом' })
  @IsNotEmpty({ message: 'Цена не может быть пустой' })
  readonly price: number;

  /* Дата и время создания. */
  @IsString({ message: 'Дата создания должна быть строкой' })
  @IsOptional()
  readonly createdAt?: string;

  /* Количество просмотров. */
  @IsNumber({}, { message: 'Количество просмотров должно быть числом' })
  @IsNotEmpty({ message: 'Количество просмотров не может быть пустым' })
  readonly views: number;

  /* Количество лайков. */
  @IsNumber({}, { message: 'Количество лайков должно быть числом' })
  @IsNotEmpty({ message: 'Количество лайков не может быть пустым' })
  readonly likes: number;

  /* Ссылка на изображение. */
  @IsString({ message: 'Ссылка на изображение должна быть строкой' })
  @IsOptional()
  readonly imageUrl?: string;
}
