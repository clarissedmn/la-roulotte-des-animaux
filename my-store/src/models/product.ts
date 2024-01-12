import { Column, Entity } from "typeorm";
import {
  // alias the core entity to not cause a naming conflict
  Product as MedusaProduct,
} from "@medusajs/medusa";

@Entity()
export class Product extends MedusaProduct {
  @Column({ type: "timestamptz", nullable: false })
  start_date: Date;

  @Column({ type: "int", nullable: false })
  duration_in_minutes: number;
}
