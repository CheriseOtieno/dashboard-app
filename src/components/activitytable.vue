<template>
    <div class="activity-table">
      <table>
        <thead>
          <tr>
            <th>#SERVICE</th>
            <th>CATEGORY</th>
            <th>DATE</th>
            <th>TASK COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in activityData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ entry.category }}</td>
            <td>{{ entry.date }}</td>
            <td>
              <span v-if="entry.success" style="color: green">✔️</span>
              <span v-else style="color: red">❌</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
<script>
  export default {
    name: 'ActivityTable',
    props: {
      activityData: {
        type: Array,
        required: true
      }
    }
  };
</script>
  
<style src="./at.css" scoped></style>
  