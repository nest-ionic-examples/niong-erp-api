import { Get, Param } from '@nestjs/common';
import { ReturnModelType } from "@typegoose/typegoose";
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

export class FindByIdController<T> {

  protected constructor(protected model: ReturnModelType<AnyParamConstructor<T>>) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

}
