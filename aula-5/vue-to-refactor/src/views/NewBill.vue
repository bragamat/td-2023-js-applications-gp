<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'

const Validator = {}

const props = defineProps({
  BillValidator: {
    type: Object,
    required: true,
  }
});
const router = useRouter()

const amount = ref(0.0)
const billType = ref(null)

const Bv = props.BillValidator

const billValidator = new Bv()

function handleSubmit(){
  billValidator.validate(amount.value, billType.value)

  if (!billValidator.hasError) {
    router.push('/')
  }
}
</script>

  <template>
    <main>Add new Bill</main>
    <div v-if="billValidator.hasError">
      {{ billValidator.lastErrorMessage }}
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="bill-title">
        Title
      </label>
      <input name="bill-title" id="bill-title" />

      <label for="bill-amount">
        Amount
      </label>
      <input name="bill-amount" id="bill-amount" v-model="amount"/>

      <select name="bill-select-type"  id="bill-select-type" v-model="billType">
        <option value="regular">Regular</option>
        <option value="extra">Extra</option>
        <option value="irresponsible">Irresponsible</option>
      </select>

      <input type="submit" value="salvar"/>
    </form>
  </template>
