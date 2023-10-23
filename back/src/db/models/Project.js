import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ userId, title, content, startDate, endDate, editorStateSave }) {
    const createdNewProject = await ProjectModel.create({
      userId,
      title,
      content,
      startDate,
      endDate,
      editorStateSave
    });
    return createdNewProject;
  }

  // Read
  static async findByUserId({ userId }) {
    const project = await ProjectModel.find({ userId });
    return project;
  }

  // Read by ProjectId
  static async findByProjectId({ _id }) {
    const project = await ProjectModel.find({ _id });
    return project;
  }

  // Delete
  static async delete({ _id }) {
    const result = await ProjectModel.deleteOne({ _id });
    console.log(result);
    return;
  }

  // Update
  static async update({ _id }, toUpdate) {
    const filter = { _id };
    const option = { returnOriginal: false };

    // newValue 값이 null 인 필드 제거하기
    let realToUpdate = {};
    for (let u in toUpdate) {
      if (toUpdate[u]) {
        realToUpdate[u] = toUpdate[u];
      }
    }

    const updatedProject = await ProjectModel.updateMany(
      filter,
      realToUpdate,
      option
    );

    return updatedProject;
  }
}

export { Project };
