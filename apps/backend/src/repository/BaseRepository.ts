import {
  Repository,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  DeepPartial,
  UpdateResult
} from 'typeorm';
import {PickKeysByType} from "typeorm/common/PickKeysByType";

interface PaginationOptions {
  page?: number;
  pageSize?: number;
  [key: string]: any;
}

export class BaseRepository<T> {
  constructor(private readonly model: Repository<T>) {}

  async findWithPagination(options?: PaginationOptions): Promise<any> {
    const { page = 1, pageSize = 50, ...otherOptions } = options;

    const skip = (page - 1) * pageSize;
    const findOptions: FindManyOptions<T> = {
      skip,
      take: pageSize,
      ...otherOptions,
    };

    const data = await this.model.find(findOptions);
    const total = await this.model.count(findOptions);
    const totalPages = Math.ceil(total / pageSize);

    return {
      page,
      pageSize,
      total,
      totalPages,
      data,
    };
  }

  save(entity: T): Promise<T> {
    return this.model.save(entity);
  }

  async update(options: FindOptionsWhere<T>, update: DeepPartial<T>): Promise<UpdateResult> {
    return this.model.update(options, update as any);
  }

  findOne(options: FindOneOptions<T>): Promise<T | undefined> {
    return this.model.findOne(options);
  }

  findOneBy(options: FindOptionsWhere<T>): Promise<T | undefined> {
    return this.model.findOneBy(options);
  }

  async find(options: FindManyOptions<T>): Promise<T[]> {
    return this.model.find(options);
  }


  count(options: FindManyOptions<T>): Promise<number> {
    return this.model.count(options);
  }
}
