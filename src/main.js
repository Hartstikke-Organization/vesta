const sendRequest = () => {
  console.log('this works')

  const apiUrl =
    'https://prod-47.northeurope.logic.azure.com:443/workflows/50b062f3b751428394c90d3c54c66633/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jc_r21azv5xTgXYH9RwHjsKj0mIbOSJAw9AF-x-0Go8'

  function getValue(form, name) {
    const el = form.querySelector(`[name="${name}"]`)
    return el ? el.value : ''
  }

  function getBool(form, name) {
    const el = form.querySelector(`[name="${name}"]`)
    return el ? el.checked : false
  }

  function buildLeadData(form) {
    const siteName =
      document.querySelector('meta[property="og:site_name"]')?.content ||
      document.querySelector('meta[name="site-name"]')?.content ||
      document.title ||
      window.location.hostname

    const data = {
      Project: siteName,
      LeadSource: getValue(form, 'LeadSource'),
      FirstName: getValue(form, 'name'),
      LastName: getValue(form, 'surname'),
      StreetHouseNumber: getValue(form, 'StreetHouseNumber'),
      PostalCode: getValue(form, 'PostalCode'),
      Gender: getValue(form, 'Gender'),
      Language: getValue(form, 'Language'),
      Email: getValue(form, 'email'),
      PhoneNumber: getValue(form, 'phone'),
      MobilePhoneNumber: getValue(form, 'MobilePhoneNumber'),
      Remarks: getValue(form, 'note'),
      JobTitle: getValue(form, 'JobTitle'),
      Donotbulkemail: getBool(form, 'Donotbulkemail'),
      NewsLetter: getBool(form, 'NewsLetter'),
      CreateContactIfNotExists: getBool(form, 'CreateContactIfNotExists'),
    }

    console.log('📦 Lead data built:', data)
    return data
  }

  async function submitLead(e) {
    e.preventDefault()
    const form = e.target
    console.log('🚀 Submitting lead from form:', form)

    const data = buildLeadData(form)

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      console.log('🔗 Request sent to:', apiUrl)

      if (response.ok) {
        const text = await response.text() // read raw text
        if (text) {
          try {
            const result = JSON.parse(text)
            console.log('✅ Lead submitted successfully:', result)
          } catch {
            console.log('✅ Lead submitted successfully (no JSON):', text)
          }
        } else {
          console.log('✅ Lead submitted successfully (empty response body)')
        }
      } else {
        console.error('❌ Failed to submit lead', await response.text())
      }
    } catch (err) {
      console.error('❌ Error submitting lead:', err)
    }
  }

  document
    .querySelectorAll('form[data-name="Contact Form"]')
    .forEach((form) => {
      form.addEventListener('submit', submitLead)
      console.log('✅ Submit handler bound to form:', form)
    })
}
sendRequest()
