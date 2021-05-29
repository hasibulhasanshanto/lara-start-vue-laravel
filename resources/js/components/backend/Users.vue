<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Users</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/home">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Users</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All Users</h3>

                <div class="card-tools">
                  <button
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#addNew"
                  >
                    <i class="fas fa-plus mr-2"></i>Add New
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#SL</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Bio</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th width="15%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@gmail.com</td>
                      <td>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa, recusandae.
                      </td>
                      <td>Admin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <a href="" class="btn btn-primary btn-sm"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <a href="" class="btn btn-warning btn-sm"
                          ><i class="fas fa-eye"></i
                        ></a>
                        <a href="" class="btn btn-danger btn-sm"
                          ><i class="fas fa-trash-alt"></i
                        ></a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@gmail.com</td>
                      <td>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa, recusandae.
                      </td>
                      <td>Admin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <a href="" class="btn btn-primary btn-sm"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <a href="" class="btn btn-warning btn-sm"
                          ><i class="fas fa-eye"></i
                        ></a>
                        <a href="" class="btn btn-danger btn-sm"
                          ><i class="fas fa-trash-alt"></i
                        ></a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@gmail.com</td>
                      <td>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa, recusandae.
                      </td>
                      <td>Admin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <a href="" class="btn btn-primary btn-sm"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <a href="" class="btn btn-warning btn-sm"
                          ><i class="fas fa-eye"></i
                        ></a>
                        <a href="" class="btn btn-danger btn-sm"
                          ><i class="fas fa-trash-alt"></i
                        ></a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john@gmail.com</td>
                      <td>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa, recusandae.
                      </td>
                      <td>Admin</td>
                      <td><span class="badge bg-success">Active</span></td>
                      <td>
                        <a href="" class="btn btn-primary btn-sm"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <a href="" class="btn btn-warning btn-sm"
                          ><i class="fas fa-eye"></i
                        ></a>
                        <a href="" class="btn btn-danger btn-sm"
                          ><i class="fas fa-trash-alt"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addNewLabel">Add New User</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="login">
            <div class="modal-body">
              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <div
                  v-if="form.errors.has('name')"
                  v-html="form.errors.get('name')"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <div
                  v-if="form.errors.has('email')"
                  v-html="form.errors.get('email')"
                />
              </div>

              <div class="form-group">
                <textarea
                  name="bio"
                  rows="4"
                  class="form-control"
                  v-model="form.bio"
                  placeholder="User Bio.."
                ></textarea>
                <div
                  v-if="form.errors.has('bio')"
                  v-html="form.errors.get('bio')"
                />
              </div>

              <div class="form-group">
                <select name="type" class="form-control" v-model="form.type">
                  <option value="" selected>Choose Type</option>
                  <option value="admin">Admin</option>
                  <option value="author">Author</option>
                  <option value="editor">Editor</option>
                </select>
                <div
                  v-if="form.errors.has('type')"
                  v-html="form.errors.get('type')"
                />
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div
                  v-if="form.errors.has('password')"
                  v-html="form.errors.get('password')"
                />
              </div>
              <div class="custom-control custom-switch">
                <input
                  v-model="form.status"
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch"
                />
                <label class="custom-control-label" for="customSwitch"
                  >Status</label
                >
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="form.busy"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: new Form({
      name: "",
      email: "",
      bio: "",
      type: "",
      password: "",
      status: "",
    }),
  }),

  methods: {
    async login() {
      const response = await this.form.post("/api/login");
      // ...
    },
  },
};
</script>
