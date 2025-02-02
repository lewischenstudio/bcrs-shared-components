import { DocumentDelivery } from './index'

export default {
  title: 'component/DocumentDelivery',
  component: DocumentDelivery,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DocumentDelivery },
  template: '<document-delivery v-bind="$props" />' // $props comes from args below
})

export const Default = Template.bind({})
Default.args = {
  contactLabel: 'Contact',
  contactValue: 'contact@example.com',
  editableCompletingParty: false,
  completingPartyEmail: 'completing.party@example.com',
  showCustodianEmail: true,
  custodianEmail: 'custodian@example.com',
  additionalLabel: 'Additional',
  additionalValue: 'additional1@example.com, additional2@example.com',
  invalidSection: false
}

export const EditableCompletingParty = Template.bind({})
EditableCompletingParty.args = {
  contactLabel: 'Contact',
  contactValue: 'contact@example.com',
  editableCompletingParty: true,
  documentOptionalEmail: 'optional@example.com',
  showCustodianEmail: true,
  custodianEmail: 'custodian@example.com',
  additionalLabel: 'Additional',
  additionalValue: 'additional1@example.com, additional2@example.com',
  invalidSection: false
}
