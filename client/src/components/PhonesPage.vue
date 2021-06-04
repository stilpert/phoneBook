<template>
  <main class="number-list">
    <div class="container">
      <h1 class="h3 mb-3 fw-normal text-center">Phone book</h1>
      <button
        type="button"
        class="btn btn-success"
        @click="$bvModal.show('modal-add')"
      >
        Add contact
      </button>
      <div id="contacts-list">
        <div class="card w-75" v-for="contact in contacts" :key="contact._id">
          <div class="card-body">
            <h5 class="card-title">{{ contact.name }}</h5>
            <p class="card-text" v-for="phone in contact.numbers" :key="phone">
              {{ phone }}
            </p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button"
                class="btn btn-warning"
                @click="$bvModal.show(contact._id + '-number'); setContactId(contact._id)"
                >
                Add new number
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="$bvModal.show(contact._id); deleteContact(contact._id)"
              >
                Delete
              </button>
            </div>
            <b-modal v-bind:id="contact._id" hide-footer>
              <div class="d-block text-center">
                <h3>Remove contact of {{contact.name}}?</h3>
              </div>
              <b-button class="mt-3" block @click="$bvModal.hide(contact._id)"
                >Cancel</b-button
              >
              <b-button class="mt-3 btn btn-danger" block @click="$bvModal.hide(contact._id);  removeContact(contact._id)"
                >Delete</b-button
              >
            </b-modal>
            <b-modal v-bind:id="contact._id + '-number'" hide-footer>
              <template #modal-title>
                Add new number to {{contact.name}}
              </template>
              <b-form @submit="onSubmitEdit">
                <label class="sr-only" for="input-number">Name</label>
                <b-form-input
                  id="input-number"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="+380(50)-11-11-111"
                  v-model="editForm.number"
                  required
                ></b-form-input>
                <b-button class="mt-3" block @click="$bvModal.hide(contact._id + '-number')">Cancel</b-button>
                <b-button class="mt-3" type="submit" variant="primary" block @click="$bvModal.hide(contact._id + '-number')">Add</b-button>
              </b-form>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-add" hide-footer>
      <template #modal-title>
        Add new contact
      </template>
      <b-form @submit="onSubmitAdd">
        <label class="sr-only" for="input-name">Name</label>
        <b-form-input
          id="input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Jane Doe"
          v-model="addForm.name"
          required
        ></b-form-input>
        <b-button class="mt-3" block @click="$bvModal.hide('modal-add')">Cancel</b-button>
        <b-button class="mt-3" type="submit" variant="primary" block @click="$bvModal.hide('modal-add')">Add</b-button>
      </b-form>
    </b-modal>

  </main>
</template>

<script>
import PhoneService from '@/services/PhoneService'

export default {
  name: 'HomePage',
  data () {
    return {
      contacts: [],
      addForm: {
        name: ''
      },
      editForm: {
        number: ''
      },
      id: ''
    }
  },
  methods: {
    async getPhones () {
      const response = await PhoneService.fetchContacts()
      this.contacts = response.data.contacts
      console.log('DATA: ', this.contacts)
    },
    async removeContact (id) {
      this.contacts = this.contacts.filter(item => (item._id !== id))
    },
    async onSubmitAdd (event) {
      event.preventDefault()
      console.log('JSON', JSON.stringify(this.addForm))
      const response = await PhoneService.addContact(JSON.stringify(this.addForm))
      console.log('RES', response)
      this.contacts.push({ name: this.addForm.name, numbers: [], _id: response.data.user._id })
      this.addForm.name = ''
    },
    async onSubmitEdit (event) {
      event.preventDefault()
      console.log(JSON.stringify(this.editForm), this.id)
      const response = await PhoneService.addNumberToContact(this.id, JSON.stringify(this.editForm))
      console.log('RES', response)
      let contact = this.contacts.find((el) => el._id === this.id)
      contact.numbers.push(this.editForm.number)
      this.editForm.number = ''
      this.id = ''
    },
    setContactId (id) {
      this.id = id
    },
    async deleteContact (id) {
      await PhoneService.deleteContact(id)
    }
  },
  mounted () {
    this.getPhones()
  }
}
</script>
