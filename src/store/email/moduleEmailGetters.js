/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


export default {
  filteredMails: state => state.mails.filter((mail) => {
    return (state.mail_filter === 'starred' ? mail.isStarred : state.mail_filter === mail.mailFolder || mail.labels.includes(state.mail_filter)) && (mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()))
  }),
  getMail: state => (emailId) => state.mails.find((email) => email.id === emailId)
}
