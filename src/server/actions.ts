import {Task} from "@wasp/entities"
import { CreateTask, UpdateTask } from "@wasp/actions/types"

type CreateTaskPayload = Pick<Task, "description">

export const createTask: CreateTask<CreateTaskPayload, Task> = async(args, context)=>{
    return context.entities.Task.create({
        data: {description: args.description},
    })
}

type UpdateTaskPayload = Pick<Task, "id" | "Done">

export const updateTask: UpdateTask<UpdateTaskPayload, Task> = async (
  { id, Done },
  context
) => {
  return context.entities.Task.update({
    where: { id  },
    data: {
      Done: Done,
    },
  })
}