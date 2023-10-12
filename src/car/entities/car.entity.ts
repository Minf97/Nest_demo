//    cars/cars.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("car_entity")
export class CarEntity {
    @PrimaryGeneratedColumn()
    id: number; // 标记为主列，值自动生成

    @Column({ type: "text" })
    factoryName: string;

    @Column({ type: "text" })
    displayName: string;

    @Column({ type: "boolean" })
    showStatus: boolean;

    @Column({ type: "text" })
    logo: string;

    @Column({ type: "text" })
    local: string
}
