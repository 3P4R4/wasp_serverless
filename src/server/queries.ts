import { Task }  from "@wasp/entities"
import { GetTasks } from "@wasp/queries/types"

export const getTasks: GetTasks<void, Task[]> = async (args, context) => {
  return context.entities.Task.findMany({})
}