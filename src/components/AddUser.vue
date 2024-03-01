<!-- <template>
    <div class="modal fade" :id="addUserModel" tabindex="-1" aria-labelledby="addUser" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h1 class="modal-title fs-5" id="addUser">Add user</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-dark">
            <form>
                <div>
                <input type="text" placeholder="Name" v-model="payload.firstName" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Surname" v-model="payload.lastName" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Email" v-model="payload.emailAdd" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Gender" v-model="payload.gender" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Age" v-model="payload.userAge" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Role" v-model="payload.userRol" class="form-control bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Password" v-model="payload.userPass" class="control bg-transparent border-dark">
            </div>
            <br><br><div class="modal-footer">
            <button type="button" class="btn bg-transparent border-light text-white" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-light">Save changes</button>
            <button type="submit" @click.prevent="addingUser" class="btn btn-success" data-bs-dismiss="modal">
                Add User
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
           component: {
            name: 'AddUser'
           },
            data(){
                return{
                    payload: {
                        userID: null,
                        firstName: '',
                        lastName: '',
                        emailAdd: '',
                        Gender: '',
                        userAge: null,
                        emailRole: '',
                        userProfile: '',
                        userPass: '',
                    }
                }
            },
            methods: {
               addingUser(){
                try{
                    this.$store.dispatch("register", this.payload);
                }catch(error){
                    console.error(error)
                }
               }
            }
        }
    </script>
    
    <style scoped>
    
    </style> -->

<!-- <template>
    <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modal1Label">Modal Title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ......
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddUser'
    }
</script>

<style scoped>

</style> -->

<template>
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add User
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user ID"
                  v-model="payload.userID"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="first name"
                  v-model="payload.firstName"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="last name"
                  v-model="payload.lastName"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user age"
                  v-model="payload.userAge"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="gender"
                  v-model="payload.Gender"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user role"
                  v-model="payload.userRole"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="email address"
                  v-model="payload.emailAdd"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user password"
                  v-model="payload.userPass"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user profile"
                  v-model="payload.userProfile"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  @click.prevent="addingUser"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Add User
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
    name: "addProduct",
    data() {
      return {
        payload: {
          userID: null,
          firstName: "",
          lastName: "",
          userAge: null,
          Gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        },
      };
    },
    methods: {
      addingUser() {
        try {
          this.$store.dispatch("register", this.payload);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped></style>