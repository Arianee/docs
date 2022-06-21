
CONFIGYML="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
if test -f "$CONFIGYML/config.yml"; then
    rm "$CONFIGYML/config.yml"
fi

circleci config pack "$CONFIGYML/configyml" >> "$CONFIGYML/config.yml"
