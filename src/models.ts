export type link = {
    path: string,
    text: string,
};

export type options = {
    value: string | ' ';
    label: string | ' ';
};


export type board = {
    _id: string,
    name: string,
    user_id: string,
    columns: column[]

}

export type column = {
    id?: string,
    name: string,
    tasks: task[]
}

export type task = {
    id?: string,
    name: string | undefined,
    description:string,
    status:string,
    subtasks: subtask[]
}


export type subtask = {
    id?: any,
    title: string,
    isCompleted: boolean,
}


