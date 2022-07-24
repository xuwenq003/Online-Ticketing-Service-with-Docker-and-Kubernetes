import { Publisher, OrderCreatedEvent, Subjects } from "@xqtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
