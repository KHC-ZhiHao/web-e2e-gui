export default {
    name: 'wait',
    type: 'action',
    btnText: '等待',
    info: '等待',
    help: '等待N毫秒',
    props: {
        value: {
            type: 'text',
            info: '毫秒',
            default: '1000'
        }
    },
    color: 'purple accent-1',
    display({ value }) {
        return `等待 ${value} 毫秒`
    },
    validate({ value }) {
        let result = Number(value)
        if (isNaN(result)) {
            return '必須為數字'
        } else {
            return true
        }
    },
    write({ value }) {
        return `await browser.sleep(${value})`
    }
}
