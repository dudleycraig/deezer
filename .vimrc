setlocal expandtab tabstop=3 shiftwidth=3 textwidth=80
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS

let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_exe = 'node_modules/.bin/eslint --config .eslintrc.json --ignore-path .eslintignore '

let g:jsx_ext_required=0
