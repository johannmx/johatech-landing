#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

# 1. Ignorar si el commit empieza con "docs:"
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == docs:* ]]; then
  echo "✅ Ignorando deploy: Commit de tipo docs detectado."
  exit 0
fi

# 2. Ignorar si TODOS los archivos cambiados son archivos de documentación (.md)
# Obtenemos la lista de archivos modificados en este commit
CHANGED_FILES=$(git diff --name-only HEAD^ HEAD)

# Verificamos si hay archivos que NO sean de documentación
NON_DOC_FILES=$(echo "$CHANGED_FILES" | grep -vE '\.md$|LICENSE$|README.*')

if [ -z "$NON_DOC_FILES" ]; then
  echo "✅ Ignorando deploy: Solo se detectaron cambios en archivos de documentación."
  exit 0
fi

echo "🚀 Continuando deploy: Se detectaron cambios en archivos de código o recursos."
exit 1
