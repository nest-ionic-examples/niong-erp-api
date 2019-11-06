import { ReturnModelType } from '@typegoose/typegoose';
import { FindController } from './find.controller';
import { Get, Param } from '@nestjs/common';
import { FindByIdController } from './find-by-id.controller';
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

export abstract class ReadController<T> extends FindController<T> {

  protected constructor(protected model: ReturnModelType<AnyParamConstructor<T>>) {
    super(model);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<T> {
    return FindByIdController.prototype.findById.apply(this, [id]);
  }

}
