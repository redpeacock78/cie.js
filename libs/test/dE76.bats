#!/usr/bin/env bats

load test_helper

@test "test function dE76()" {
    #Reference: http://www2.ece.rochester.edu/~gsharma/ciede2000/dataNprograms/CIEDE2000.xls
    #Reference: https://plkl.sakura.ne.jp/?page_id=397

    IFS=$'\n'
    declare lab_pairs=($(cat "${DATA}/lab_paires.txt"))
    declare dE1976=($(cat "${DATA}/dE1976.txt"))

    for (( i=0; i < "${#lab_pairs[@]}"; i++ )); do
        run lab -dE76 ${lab_pairs[i]}
        [[ "${lines[0]}" == "${dE1976[i]}" ]]
        coverage lab -dE76 ${lab_pairs[i]}
    done
}