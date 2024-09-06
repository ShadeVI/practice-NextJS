"use server"

import { randomUUID } from "crypto";
import { z } from "zod"
import { readFile, writeFile } from "fs/promises"



const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
})

type UserType = z.infer<typeof userSchema>

export const createUser = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const uuid = randomUUID().toString()
  const user: UserType = { firstName, lastName, id: uuid }

  try {
    userSchema.parse(user)
    console.log("Valid user")
    saveUser(user)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.flatten().fieldErrors
    }
    return {}
  }
};

export const fetchUsers = async (): Promise<UserType[]> => {
  try {
    const result = await readFile("users.json", { encoding: 'utf8' })
    const users = result ? JSON.parse(result) : []
    return users
  } catch (err) {
    return []
  }
}

const saveUser = async (user: UserType) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}