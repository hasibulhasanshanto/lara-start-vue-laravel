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
                  <button class="btn btn-success" @click="addNew">
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
                      <th>Registered At</th>
                      <th>Status</th>
                      <th width="15%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, i) in users" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>
                        {{ user.bio }}
                      </td>
                      <td>{{ user.type | capitalize }}</td>
                      <td>{{ user.created_at | formatDate }}</td>
                      <td>
                        <span class="badge bg-success" v-if="user.status == 1"
                          >Active</span
                        >
                        <span class="badge bg-danger" v-if="user.status == 0"
                          >Deactive</span
                        >
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          @click="editUser(user)"
                        >
                          <i class="fas fa-edit"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          @click="deleteUser(user.id)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
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
            <h5 class="modal-title" v-show="!editMode">Add New User</h5>
            <h5 class="modal-title" v-show="editMode">Update User</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editMode ? updateUser() : createUser()">
            <div class="modal-body">
              <AlertError
                :form="form"
                message="Please check all input fields an try again."
              />
              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <HasError :form="form" field="name" class="error" />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <HasError :form="form" field="email" class="error" />
              </div>

              <div class="form-group">
                <textarea
                  name="bio"
                  rows="4"
                  class="form-control"
                  v-model="form.bio"
                  placeholder="User Bio.."
                ></textarea>
                <HasError :form="form" field="bio" class="error" />
              </div>

              <div class="form-group">
                <select name="type" class="form-control" v-model="form.type">
                  <option value="" selected>Choose Type</option>
                  <option value="admin">Admin</option>
                  <option value="author">Author</option>
                  <option value="editor">Editor</option>
                </select>
                <HasError :form="form" field="type" class="error" />
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  v-model="form.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <HasError :form="form" field="password" class="error" />
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
                v-show="!editMode"
                type="submit"
                class="btn btn-primary"
                :disabled="form.busy"
              >
                Create
              </button>
              <button
                v-show="editMode"
                type="submit"
                class="btn btn-primary"
                :disabled="form.busy"
              >
                Update
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
    editMode: false,
    users: {},

    form: new Form({
      id: "",
      name: "",
      email: "",
      bio: "",
      type: "",
      password: "",
      status: false,
    }),
  }),

  methods: {
    allUser() {
      this.$Progress.start();
      axios.get("/api/user").then(({ data }) => (this.users = data.data));
      this.$Progress.finish();
    },
    async createUser() {
      this.$Progress.start();
      const response = await this.form
        .post("/api/user")
        .then(() => {
          this.form.reset();
          Fire.$emit("reloadUser");
          $("#addNew").modal("hide");
          Toast.fire({
            icon: "success",
            title: "User created successfully",
          });
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },
    addNew() {
      this.form.reset();
      this.form.clear();
      this.editMode = false;
      $("#addNew").modal("show");
    },
    editUser(user) {
      this.form.reset();
      this.form.clear();
      this.editMode = true;
      $("#addNew").modal("show");
      this.form.fill(user);
    },
    updateUser() {
      this.$Progress.start();
      this.form
        .put("/api/user/" + this.form.id)
        .then((res) => {
          this.form.reset();
          Fire.$emit("reloadUser");
          $("#addNew").modal("hide");
          Toast.fire({
            icon: "success",
            title: res.data.success,
          });
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },
    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$Progress.start();
          this.form
            .delete("/api/user/" + id)
            .then((res) => {
              let msg = res.data[1];
              Swal.fire("Deleted!", msg, "success");
              this.$Progress.finish();
              Fire.$emit("reloadUser");
            })
            .catch(() => {
              Swal.fire("Error!", "User deleted Failed.", "error");
              this.$Progress.fail();
            });
        }
      });
    },
  },
  // Methods end here

  created() {
    this.allUser();
    Fire.$on("reloadUser", () => {
      this.allUser();
    });
  },
  mounted() {
    console.log("Component mounted.");
  },
  // onUpdate() {
  //   this.allUser();
  // },
};
</script>
