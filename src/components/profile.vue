<template>
  <div class="profile-page">
    <h2>User Profile</h2>

    <div class="profile-info">
      <div class="profile-pic">
        <input
          type="file"
          accept="image/*"
          @change="handleImageUpload"
          class="file-input"
          ref="fileInput"
        />
        <img :src="profileImage" alt="Profile Picture" class="avatar" />
        <button v-if="uploadedImage" @click="deleteImage" class="delete-button">Delete</button>
      </div>

      <div class="details">
        <p>
          <strong>Name:</strong>
          <input
            v-model="user.name"
            type="text"
            placeholder="Enter your name"
            class="editable-name"
            @blur="updateUserName"
            :readonly="!isEditing"
          />
          <span v-if="!isEditing" @click="startEditing" class="edit-icon">✏️</span>
          <button v-if="isEditing" @click="saveName" class="save-button">Change</button>
        </p>
        <p><strong>Email:</strong> {{ user.email }}</p>

        <button @click="showPasswordInput = !showPasswordInput" class="save-button">
          Change Password
        </button>

        <div v-if="showPasswordInput">
          <strong>New Password:</strong>
          <input
            v-model="newPassword"
            type="password"
            placeholder="Enter new password"
            class="editable-name"
          />
          <button @click="updatePassword" class="save-button">Save New Password</button>
        </div>
      </div>
    </div>

    <router-link to="/activity" class="activity-link">
  Your Recent Activity →
</router-link>

    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        uploadedImage: null,
        isEditing: false,
        newPassword: '',
        showPasswordInput: false,
      };
    },
    computed: {
      user() {
        return this.$store.getters.currentUser;
      },
      profileImage() {
        return this.uploadedImage || this.user.profilePicture || '/default-profile.png';
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('logoutUser');
        this.$router.push('/');
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.uploadedImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      deleteImage() {
        this.uploadedImage = null;
      },
      startEditing() {
        this.isEditing = true;
      },
      saveName() {
        this.$store.commit('updateUserName', this.user.name);
        this.isEditing = false;
      },
      updateUserName() {
        this.$store.commit('updateUserName', this.user.name);
      },
      updatePassword() {
        if (this.newPassword.trim() !== '') {
          this.$store.dispatch('updatePassword', this.newPassword);
          this.newPassword = '';
          this.showPasswordInput = false;
        }
      }
    }
  };
</script>

<style scoped>
  .profile-page {
    max-width: 700px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fafafa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow-x: hidden; 
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .profile-info {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }

  .profile-pic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .file-input {
    margin-bottom: 10px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
  }

  .delete-button {
    margin-top: 10px;
    padding: 6px 12px;
    background-color: #ff4d4f;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .details {
    flex: 1;
  }

  .details p {
    margin-bottom: 15px;
  }

  .editable-name {
    padding: 6px 10px;
    font-size: 16px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .edit-icon {
    margin-left: 10px;
    cursor: pointer;
    font-size: 18px;
  }

  .save-button {
    margin-left: 10px;
    padding: 6px 12px;
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .save-button:hover {
    background-color: #ff7875;
  }

  .logout-button {
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #ff7875;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .logout-button:hover {
    background-color: #1890ff;
  }

  .activity-table {
    margin-top: 20px;
    width: 100%;
    overflow-x: auto;
  }

  .activity-table table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  .activity-table th,
  .activity-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }

  .activity-table th {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    .profile-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .details {
      width: 100%;
    }

    .editable-name,
    .save-button {
      margin-left: 0;
      margin-top: 10px;
      width: 80%;
      max-width: 300px;
    }

    .edit-icon {
      display: block;
      margin-top: 10px;
    }

    .profile-pic {
      width: 100%;
    }
  }
  .activity-link {
    display: inline-block;
    margin-top: 30px;
    font-size: 16px;
    color: #1890ff;
    text-decoration: none;
  }

  .activity-link:hover {
    text-decoration: underline;
  }

</style>

