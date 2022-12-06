export type link = {
    path: string,
    text: string,
}

export type board = {
    name: string,
    columns: column[]
}

export type column = {
    name: string,
    tasks: task[]
}

export type task = {
    title: string,
    description:string,
    status:string,
    subtasks: subtask[]
}


export type subtask = {
    title: string,
    isCompleted: boolean,
}


