# -*- coding: utf-8 -*-
"""SMS Spam ML Algorithm.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1mLMSEaR6q9giM_mPY5dY2zLiTfHnC_BW

Import libraries
"""

import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

import warnings
warnings.filterwarnings('ignore')

"""Load Data"""

df = pd.read_csv("/content/SMS Spam Collection Dataset.csv", encoding='latin-1')
df.head()

"""Cleaning Dataset"""

df = df.drop(['Unnamed: 2','Unnamed: 3', 'Unnamed: 4'], axis = 1)
df.head()

"""View dataset information, shape, and change headers"""

df.info()
df.shape
df = df.rename(columns = {'v1':'label', 'v2':'text'})
print('-------------------------------------------------------------------------------')

df.head(5)

"""Check for Null Value"""

df.isnull().sum()

"""# Data Preprocessing

Removing Punctuation
"""

import string

string.punctuation

def remove_punct(text):
    text = "".join([char for char in text if char not in string.punctuation])
    return text

df['text_clean'] = df['text'].apply(lambda x: remove_punct(x))

df.head()

"""Tokenize words"""

import re

def tokenize(text):
    tokens = re.split('\W', text)
    return tokens

df['text_tokenized'] = df['text_clean'].apply(lambda x: tokenize(x.lower()))

df.head()

"""Removing stopwords"""

stopwords = nltk.corpus.stopwords.words('english')

def remove_stopwords(text_tokenized):
    text = [word for word in text_tokenized if word not in stopwords]
    return text

df['text_nostop'] = df['text_tokenized'].apply(lambda x: remove_stopwords(x))

df.head()

"""# ML NLP Word Vectorization

Word vectorization is a methodology in NLP to map words or phrases from vocabulary to a corresponding vector of real numbers which used to find word predictions, word similarities/semantics. The process of converting words into numbers are called Vectorization. TF-IDF is a popular vectorization technique used in NLP.

Applying TF-IDF Vectorizer
"""

#importing libraries
from sklearn.feature_extraction.text import TfidfVectorizer

# clean and split words
def clean_text(text):
    text = "".join([char.lower() for char in text if char not in string.punctuation])
    tokens = re.split('\W', text)
    text = [word for word in tokens if word not in stopwords]

    return text

#vectorize text usign teh created clean_text function
tfidf_vect = TfidfVectorizer(analyzer=clean_text)
X_tfidf = tfidf_vect.fit_transform(df['text_clean'])

print(X_tfidf.shape)
print(tfidf_vect.get_feature_names_out())

# Convert to dataframe
X_features = pd.DataFrame(X_tfidf.toarray())
X_features.head()

"""# ML Model - Random Forest Classifier

Random Forest is an ensemble machine learning technique that combines multiple decision trees to create a robust and accurate model. Each decision tree in the forest is trained on a random subset of the training data and makes individual predictions.

 A Random Forest Identifier can be a powerful approach for text classification based on its ability to handle complex relationships within data and reduce overfitting.
"""

#importing library
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score, recall_score
from sklearn.model_selection import train_test_split

"""Splitting the dataset"""

X_train, X_test, y_train, y_test = train_test_split(X_features,df['label'],test_size=0.2)

#Fit a basic Random Forest Model
rf = RandomForestClassifier()
rf_model = rf.fit(X_train, y_train)

"""Report Printing Function"""

def print_report(y_val, y_pred):
    print(f'Accuracy Score: {accuracy_score(y_test, y_pred)}')
    print(f'Confusion Matrix: \n {confusion_matrix(y_test, y_pred)}')
    print(f'Classification Report: \n {classification_report(y_test, y_pred)}')

"""Prediction and Accuracy"""

# Make predictions on the test set using fit model
y_pred = rf_model.predict(X_test)

# Checking the precision and recall of the algorithm to identify spam messages
precision = precision_score(y_test, y_pred, pos_label='spam')
recall = recall_score(y_test, y_pred, pos_label='spam')

print("Report on identifying spam SMS")
print('Precision: ',precision.round(3)*100,'%')
print('Recall: ',recall.round(3)*100,'%')

print('\n')

print("GENERAL REPORT")
print_report(y_test, y_pred)

"""Reference:
Spam Detection | NLP, ANJU SUKUMARAN, https://www.kaggle.com/code/anjusukumaran4/spam-detection-nlp/input

Ham or Spam: NLP, SHIVAM TYAGI, https://www.kaggle.com/code/shivamtyagiofficial/ham-or-spam-nlp/output
"""