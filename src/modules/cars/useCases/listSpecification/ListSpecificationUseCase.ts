import { Specification } from '../../model/Specification';
import { ISpecificationRepository } from '../../repositories/implementations/SpecificationRepository.types';

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationUseCase };
